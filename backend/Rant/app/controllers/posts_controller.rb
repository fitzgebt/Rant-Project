require 'pry'

class PostsController < ApplicationController

    def index
        # binding.pry
        render json: Post.all, key_transformation: :camel_lower
    end

    def show
        binding.pry
        post - Post.find_by(id: params[:id])
        render json: post, key_transformation: :camel_lower
    end

    def create
        post = Post.create(post_params)
        binding.pry
        render json: post, key_transformation: :camel_lower
    end

    def update
        post = Post.find_by_id(params[:id])
        post.text = params[:post][:text]
        post.author = params[:post][:author]
        post.save
        render json: post, key_transformation: :camel_lower
    end

    def destroy

    end

    private 
    def post_params
        params.require(:post).permit(:id, :text, :author)
    end

end
