class TrackSerializer < ActiveModel::Serializer
  attributes :id, :id, :name, :artist, :image, :preview, :spotify_id
end
