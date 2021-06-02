class PostSerializer < ActiveModel::Serializer
    attributes :id, :text, :author
end
