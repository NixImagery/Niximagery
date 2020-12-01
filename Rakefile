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

# task :test, [:var] do |task, args|
#   args.with_defaults(var: 'Commit via Rake')
#   puts "#{args.var.inspect}"
#   puts 2 + 2
# end

desc "Generate and publish blog to master/docs"
task :publish, [:var] => [:generate] do |task, args|
  args.with_defaults(var: 'Commit via Rake')
Dir.mktmpdir do |tmp|
    system "mv docs/* #{tmp}"
    system "git checkout -B master"
    system "rm -rf docs/*"
    system "mv #{tmp}/* docs"
    system "git add ."
    system "git commit -a -m #{args.var.inspect}"
    system "git push origin master --force"
    system "git checkout master"
    system "echo yolo"
  end
end

task :default => :publish