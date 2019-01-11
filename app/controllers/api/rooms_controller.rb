class Api::RoomsController < ApplicationController
  before_action :set_room, only: [:show, :update, :destroy]

  def index
    render json: Room.all.order(created_at: :desc)
  end

  def show
    render json: @room
  end

  def create
    room = Room.create(room_params)
    if room.save
      render json: room
    else
      render json: { errors: room.errors.full_messages.join(',') }, status: 422
    end
  end

  def update
    if @room.update(room_params)
      render json: @room
    else
      render json: { errors: @room.errors.full_messages.join(',') }, status: 422
    end
  end

  def destroy
    @room.destroy
  end

  private
    def set_room
      @room = Room.find(params[:id])
    end

    def room_params
      params.require(:room).permit(:capacity, :room_number, :price, :availabilty, :ada, :smoking, :reservation_id, :created_at, :updated_at, :index_rooms_on_reservation_id)
    end
end