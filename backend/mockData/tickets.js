const mockData = {
  movies: [
    {
      id: 1,
      name: "Inception",
      showtimes: ["10:00 AM", "2:00 PM", "6:00 PM"],
      dates: ["11-02-2025", "12-02-2025", "13-02-2025"],
      price: 12.99,
      availableSeats: 45
    },
    {
      id: 2,
      name: "The Dark Knight",
      showtimes: ["11:00 AM", "3:00 PM", "7:00 PM"],
      dates: ["14-02-2025", "15-02-2025", "16-02-2025"],
      price: 14.99,
      availableSeats: 30
    },
    {
      id: 3,
      name: "Interstellar",
      showtimes: ["12:00 PM", "4:00 PM", "8:00 PM"],
      dates: ["17-02-2025", "18-02-2025", "19-02-2025"],
      price: 15.99,
      availableSeats: 50
    },
    {
      id: 4,
      name: "The Matrix",
      showtimes: ["1:00 PM", "5:00 PM", "9:00 PM"],
      dates: ["20-02-2025", "21-02-2025", "22-02-2025"],
      price: 10.99,
      availableSeats: 40
    },
    {
      id: 5,
      name: "Avatar",
      showtimes: ["3:00 PM", "7:00 PM", "11:00 PM"],
      dates: ["23-02-2025", "24-02-2025", "25-02-2025"],
      price: 18.99,
      availableSeats: 25
    }
  ],
  events: [
    {
      id: 1,
      name: "Taylor Swift Concert",
      venue: "Madison Square Garden",
      dates: ["16-02-2025", "17-02-2025"],
      price: 89.99,
      availableSeats: 200
    },
    {
      id: 2,
      name: "Comic Con 2025",
      venue: "Convention Center",
      dates: ["20-02-2025", "21-02-2025"],
      price: 45.00,
      availableSeats: 500
    }
  ],
  travel: [
    {
      id: 1,
      name: "Paris Package",
      duration: "7 days",
      dates: ["15-02-2025", "20-02-2025", "25-02-2025"],
      price: 1299.99,
      availableSeats: 20
    },
    {
      id: 2,
      name: "Tokyo Adventure",
      duration: "10 days",
      dates: ["26-02-2025", "05-03-2025", "15-03-2025"],
      price: 1599.99,
      availableSeats: 15
    }
  ]
};

module.exports = mockData; 