# config valid only for current version of Capistrano
lock '3.3.5'

set :application, 'minitheory-website'
set :repo_url, 'gitolite3@megatron.minitheory.com:minitheory-website.git'

# Default branch is :master
# ask :branch, proc { `git rev-parse --abbrev-ref HEAD`.chomp }.call

# Default deploy_to directory is /var/www/my_app_name
set :deploy_to, '/home/deployer/minitheory.com'

# Default value for :scm is :git
# set :scm, :git

# Default value for :format is :pretty
# set :format, :pretty

# Default value for :log_level is :debug
set :log_level, :info

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
# set :linked_files, fetch(:linked_files, []).push('config/database.yml')

# Default value for linked_dirs is []
# set :linked_dirs, fetch(:linked_dirs, []).push('bin', 'log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'vendor/bundle', 'public/system')

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for keep_releases is 5
set :keep_releases, 1

set :rbenv_type, :user
set :rbenv_ruby, '2.1.5'

set :default_env, {
  'PATH' => '$HOME/.rbenv/shims:$PATH',
}

namespace :deploy do
  task :build_site do
    on roles(:web) do
      within release_path do
        execute :bower, 'install'
        execute :bundle, 'install --without=deployment'
        execute :gulp, 'build'
      end
    end
  end

  after :updated, :build_site

  after :restart, :clear_cache do
    on roles(:web), in: :groups, limit: 3, wait: 10 do
      # Here we can do anything such as:
      # within release_path do
      #   execute :rake, 'cache:clear'
      # end
    end
  end
end
