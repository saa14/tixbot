const mockData = {
  movies: [
    {
      id: 1,
      name: "Inception",
      showtimes: ["10:00 AM", "2:00 PM", "6:00 PM"],
      dates: ["2024-03-20", "2024-03-21", "2024-03-22"],
      price: 12.99,
      availableSeats: 45
    },
    {
      id: 2,
      name: "The Dark Knight",
      showtimes: ["11:00 AM", "3:00 PM", "7:00 PM"],
      dates: ["2024-03-20", "2024-03-21", "2024-03-22"],
      price: 14.99,
      availableSeats: 30
    },
    {
      id: 3,
      name: "Interstellar",
      showtimes: ["12:00 PM", "4:00 PM", "8:00 PM"],
      dates: ["2024-03-23", "2024-03-24", "2024-03-25"],
      price: 15.99,
      availableSeats: 50
    },
    {
      id: 4,
      name: "The Matrix",
      showtimes: ["1:00 PM", "5:00 PM", "9:00 PM"],
      dates: ["2024-03-26", "2024-03-27", "2024-03-28"],
      price: 10.99,
      availableSeats: 40
    },
    {
      id: 5,
      name: "Avatar",
      showtimes: ["3:00 PM", "7:00 PM", "11:00 PM"],
      dates: ["2024-03-29", "2024-03-30", "2024-03-31"],
      price: 18.99,
      availableSeats: 25
    },
    {
      id: 6,
      name: "Titanic",
      showtimes: ["2:00 PM", "6:00 PM", "10:00 PM"],
      dates: ["2024-04-01", "2024-04-02", "2024-04-03"],
      price: 11.99,
      availableSeats: 35
    },
    {
      id: 7,
      name: "Jurassic Park",
      showtimes: ["12:30 PM", "4:30 PM", "8:30 PM"],
      dates: ["2024-04-04", "2024-04-05", "2024-04-06"],
      price: 13.99,
      availableSeats: 20
    },
    {
      id: 8,
      name: "The Godfather",
      showtimes: ["1:30 PM", "5:30 PM", "9:30 PM"],
      dates: ["2024-04-07", "2024-04-08", "2024-04-09"],
      price: 16.99,
      availableSeats: 15
    },
    {
      id: 9,
      name: "Pulp Fiction",
      showtimes: ["3:30 PM", "7:30 PM", "11:30 PM"],
      dates: ["2024-04-10", "2024-04-11", "2024-04-12"],
      price: 14.99,
      availableSeats: 10
    },
    {
      id: 10,
      name: "Forrest Gump",
      showtimes: ["2:15 PM", "6:15 PM", "10:15 PM"],
      dates: ["2024-04-13", "2024-04-14", "2024-04-15"],
      price: 12.49,
      availableSeats: 5
    }
  ],
  events: [
    {
      id: 1,
      name: "Taylor Swift Concert",
      venue: "Madison Square Garden",
      dates: ["2024-04-15", "2024-04-16"],
      price: 89.99,
      availableSeats: 200
    },
    {
      id: 2,
      name: "Comic Con 2024",
      venue: "Convention Center",
      dates: ["2024-04-20", "2024-04-21"],
      price: 45.00,
      availableSeats: 500
    },
    {
      id: 3,
      name: "Rock Festival",
      venue: "Central Park",
      dates: ["2024-05-01", "2024-05-02"],
      price: 75.00,
      availableSeats: 300
    },
    {
      id: 4,
      name: "Food Expo",
      venue: "City Hall",
      dates: ["2024-05-10", "2024-05-11"],
      price: 25.00,
      availableSeats: 150
    },
    {
      id: 5,
      name: "Art Exhibition",
      venue: "Art Museum",
      dates: ["2024-05-15", "2024-05-16"],
      price: 20.00,
      availableSeats: 100
    },
    {
      id: 6,
      name: "Tech Conference",
      venue: "Convention Center",
      dates: ["2024-06-01", "2024-06-02"],
      price: 150.00,
      availableSeats: 250
    },
    {
      id: 7,
      name: "Charity Gala",
      venue: "Grand Hotel",
      dates: ["2024-06-10"],
      price: 200.00,
      availableSeats: 50
    },
    {
      id: 8,
      name: "Theater Play",
      venue: "Local Theater",
      dates: ["2024-06-15", "2024-06-16"],
      price: 30.00,
      availableSeats: 80
    },
    {
      id: 9,
      name: "Dance Competition",
      venue: "City Auditorium",
      dates: ["2024-06-20"],
      price: 40.00,
      availableSeats: 120
    },
    {
      id: 10,
      name: "Film Festival",
      venue: "Downtown Cinema",
      dates: ["2024-07-01", "2024-07-02"],
      price: 60.00,
      availableSeats: 200
    }
  ],
  travel: [
    {
      id: 1,
      name: "Paris Package",
      duration: "7 days",
      dates: ["2024-05-01", "2024-05-15", "2024-05-30"],
      price: 1299.99,
      availableSeats: 20
    },
    {
      id: 2,
      name: "Tokyo Adventure",
      duration: "10 days",
      dates: ["2024-06-01", "2024-06-15", "2024-06-30"],
      price: 1599.99,
      availableSeats: 15
    },
    {
      id: 3,
      name: "New York City Tour",
      duration: "5 days",
      dates: ["2024-07-01", "2024-07-10"],
      price: 899.99,
      availableSeats: 25
    },
    {
      id: 4,
      name: "London Getaway",
      duration: "6 days",
      dates: ["2024-08-01", "2024-08-15"],
      price: 1099.99,
      availableSeats: 10
    },
    {
      id: 5,
      name: "Sydney Experience",
      duration: "8 days",
      dates: ["2024-09-01", "2024-09-10"],
      price: 1399.99,
      availableSeats: 5
    },
    {
      id: 6,
      name: "Rome Historical Tour",
      duration: "7 days",
      dates: ["2024-10-01", "2024-10-15"],
      price: 1199.99,
      availableSeats: 12
    },
    {
      id: 7,
      name: "Dubai Luxury Trip",
      duration: "10 days",
      dates: ["2024-11-01", "2024-11-15"],
      price: 1999.99,
      availableSeats: 8
    },
    {
      id: 8,
      name: "Iceland Adventure",
      duration: "7 days",
      dates: ["2024-12-01", "2024-12-10"],
      price: 1499.99,
      availableSeats: 6
    },
    {
      id: 9,
      name: "Thailand Beach Holiday",
      duration: "10 days",
      dates: ["2024-12-15", "2024-12-30"],
      price: 1299.99,
      availableSeats: 20
    },
    {
      id: 10,
      name: "Canada Ski Trip",
      duration: "7 days",
      dates: ["2025-01-01", "2025-01-15"],
      price: 1599.99,
      availableSeats: 10
    }
  ]
};

module.exports = mockData; 