# frozen_string_literal: true

desc "Serve the site locally (PORT=8000 by default)"
task :serve do
  require "webrick"

  server = WEBrick::HTTPServer.new(
    Port: Integer(ENV.fetch("PORT", 8000)),
    DocumentRoot: __dir__
  )
  trap("INT") { server.shutdown }
  server.start
end

desc "Fetch GitHub star counts and update them in application.js (GITHUB_TOKEN optional)"
task :stars do
  require "json"
  require "net/http"

  path = File.join(__dir__, "application.js")
  source = File.read(path)

  source.scan(%r{github: 'https://github\.com/(rubycdp/[\w-]+)'}).flatten.uniq.each do |repo|
    request = Net::HTTP::Get.new("/repos/#{repo}", "Accept" => "application/vnd.github+json")
    request["Authorization"] = "Bearer #{ENV["GITHUB_TOKEN"]}" if ENV["GITHUB_TOKEN"]
    response = Net::HTTP.start("api.github.com", use_ssl: true) { |http| http.request(request) }
    abort "#{repo}: #{response.code} #{response.message}" unless response.is_a?(Net::HTTPSuccess)

    count = JSON.parse(response.body).fetch("stargazers_count")
    stars = count >= 1000 ? "#{(count / 1000.0).round(1)}k".sub(".0k", "k") : count.to_s
    key = repo.split("/").last

    source.sub!(/(key: '#{key}'.*?stars: ')[^']*/m) { "#{Regexp.last_match(1)}#{stars}" }
    puts "#{repo}: #{stars}"
  end

  File.write(path, source)
end

task default: :serve
