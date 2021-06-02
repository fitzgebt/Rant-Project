class PostsController < ApplicationController

    def create
        post = Post.create(post_params)
        render json: post, key_transformation: :camel_lower
    end

    def update

    end

end
