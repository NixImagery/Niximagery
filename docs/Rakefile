require 'rubygems'
require 'rake'
require 'rdoc'
require 'date'
require 'yaml'
require 'tmpdir'
require 'jekyll'

desc "Generate blog files"
task :generate do
  Jekyll::Site.new(Jekyll.configuration({
    "source"      => ".",
    "destination" => "docs"
  })).process
end


desc "Generate and publish blog to master/docs"
task :publish => [:generate] do
  Dir.mktmpdir do |tmp|
    system "mv docs/* #{tmp}"
    system "git checkout -B master"
    system "rm -rf docs/*"
    system "mv #{tmp}/* docs"
    message = "Site updated via rake at #{Time.now.utc}"
    system "git add ."
    system "git commit -am #{message.shellescape}"
    system "git push origin master --force"
    system "git checkout master"
    system "echo yolo"
  end
end

task :default => :publish