class GameSerializer < ActiveModel::Serializer
  attributes :id, :player_name, :score
end
