class Room < ApplicationRecord
  belongs_to :reservation, optional: true
end
