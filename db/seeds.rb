5.times do
  Room.create(
      capacity: 2,
      room_number: "#{i}",
      price: 125.00,
      availability: true,
      ada: true,
      smoking: false
  )
end

5.times do |i|
  # create users for reservations
  user = User.new(email: "#{i}_test@test.com", first_name: "#{i}_first", last_name: "#{i}_last")
  # create dummy users for reservations
  user.save!(validate: false)

  reservation = Reservation.create(
      start_date: Date.new(2018,6,1),
      end_date: Date.new(2018,6,1) + 3,
      adults: 2,
      child: 1,
      user_id: user.id
  )

  Room.create(
      capacity: 4,
      room_number: "#{i}00",
      price: 165.00,
      availability: true,
      ada: true,
      smoking: false,
      reservation_id: reservation.id
  )
end