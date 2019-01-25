class Api::ReservationsController < ApplicationController
  
  before_action :find_reservaton, only: [:show, :update, :destroy]

  def index
    render json: current_user.reservations.all
  end

  def show
    render json: @reservation
  end

  def create
    reservation = current_user.reservations.new(reservation_params)
    if reservation.save
      render json: reservation
    else
      render json: reservation.errors, status: 422
    end
  end

  def update
    if @reservation.update(reservation_params)
      render json: @reservation
    else
      render json: @reservation.errors, status: 422
    end
  end

  def destroy
    @reservation.destroy
  end

  private 
    def find_reservaton
      @reservation = Reservation.find(params[:id])
    end

    def reservation_params
      params.require(:reservation).permit(:start_date, :end_date, :adults, :child)
    end

end
