const input = require("prompt-sync")();

let hotels = Array();
let bookings = Array();


let loop = true;

while (loop) {
    console.log("Choose an option:\n");
    console.log("1 - Add hotel");
    console.log("2 - Search hotel by city");
    console.log("3 - Book a hotel");
    console.log("4 - Cancel booking");
    console.log("5 - List bookings");
    console.log("6 - List hotels");
    console.log("7 - Exit\n");

    let choice = parseInt(input());

    switch (choice) {
        case 1:
            console.clear();
            let newHotel = {
                id: hotels.length + 1,
                name: input("Type the hotel's name: "),
                city: input("Type the hotel's city: "),
            };

            let totalRooms;
            do {
                let testTotalRooms = parseInt(input("Type the amount of rooms: "));
                if (testTotalRooms > 0) {
                    totalRooms = testTotalRooms;
                } else {
                    console.log(`Type a valid number.`);
                }
            } while (isNaN(totalRooms))
            
            newHotel.totalRooms = totalRooms;

            let availableRooms;
            do {
                let testAvailableRooms = parseInt(input("Type the amount of available rooms: "));
                if (testAvailableRooms <= totalRooms && testAvailableRooms >= 0) {
                    availableRooms = testAvailableRooms;
                } else {
                    console.log(`Type a valid number. There's only ${totalRooms} rooms in total!`);
                }
            } while (isNaN(availableRooms))
            
            newHotel.availableRooms = availableRooms;
            hotels.push(newHotel);
            console.clear();
            break;
            
        case 2:
            console.clear();
            let searchedCity = input("Type the city to search hotels: ");
            let hotelsList = Array();
            for (let hotel of hotels) {
                if (hotel.city === searchedCity) {
                    hotelsList.push(hotel);
                }
            }

            if (hotelsList.length !== 0) {
                console.table(hotelsList);
                input("Type any button to continue.");
                console.clear();
            } else {
                console.log("No hotels found. Did you type right?");
                input("Type any button to continue.");
                console.clear();
            }
            break;

        case 3:
            console.clear();
            if (hotels.length === 0) {
                console.log("No hotels available. Try adding one first.");
                input("Type any button to continue.");
                console.clear();
                break;
            }
            let hotelName = input("Type the hotel's name: ");
            for (let hotel of hotels) {
                if (hotel.name === hotelName) {
                    if (hotel.availableRooms > 0) {
                        let booking = {
                            id: bookings.length + 1,
                            idHotel: hotel.id,
                            name: input("Type your name: ")
                        };
    
                        console.clear();
                        console.log(`Confirm a booking for "${booking.name}" in hotel "${hotel.name}"?`);
                        let choice = input("Type 'y' to confirm. Any other word typed will cancel the booking.");
                        if (choice === 'y') {
                            bookings.push(booking);
                            hotel.availableRooms--;
                        }
    
                        break;

                    } else {
                        console.clear();
                        console.log("No rooms available.");
                        input("Type any button to continue.");
                        console.clear();
                    }
                    
                } else {
                    console.clear();
                    console.log("No hotels found! Did you type right?");
                    input("Type any button to continue.");
                    console.clear();
                }
            }
            break;

        case 4:
            console.clear();
            if (bookings.length === 0) {
                console.log("No bookings made yet. Try making one first.");
                input("Type any button to continue.");
                console.clear();
                break;
            }
            let cancelledBooking;
            do {
                let testCancelledBooking = parseInt(input("Type the booking Id: "));
                if (testCancelledBooking > 0 && testCancelledBooking <= bookings.length) {
                    cancelledBooking = testCancelledBooking;
                } else {
                    console.log(`Type a valid number.`);
                }
            } while (isNaN(cancelledBooking))
            console.clear();
            let hotelId = bookings[cancelledBooking - 1].hotelId;
            console.log(`Cancel the booking for ${bookings[cancelledBooking-1].name} in the hotel ${hotels[hotelId-1].name}?`); //error
            let choice = input("Type 'y' to confirm. Any other word typed will quit the cancellation.");
                        if (choice === 'y') {
                            bookings.splice(cancelledBooking - 1,1);
                            hotels[hotelId].availableRooms++;
                        }
            break;
        
        case 5:
             console.clear();
             console.table(bookings);
             input("Type any button to continue.");
             console.clear();
             break;

        case 6:
            console.clear();
            console.table(hotels);
            input("Type any button to continue.");
            console.clear();
            break;

        case 7:
            console.clear();
            loop = false;
            break;

        default:
            console.clear();
            console.log("Invalid Option!\n");
            break;

    }

}