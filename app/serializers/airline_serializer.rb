class AirlineSerializer
  include JSONAPI::Serializer
  attributes :name, :image_url, :slug, :avg_score # control what attributes are exposed

  has_many :reviews
end
