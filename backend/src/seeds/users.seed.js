import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Female Users
  {
    email: "priya.sharma@example.in",
    fullName: "Priya Sharma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  {
    email: "aisha.khan@example.in",
    fullName: "Aisha Khan",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    email: "sneha.patel@example.in",
    fullName: "Sneha Patel",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/13.jpg",
  },
  {
    email: "rhea.verma@example.in",
    fullName: "Rhea Verma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/14.jpg",
  },
  {
    email: "ananya.mishra@example.in",
    fullName: "Ananya Mishra",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/15.jpg",
  },
  {
    email: "isha.iyer@example.in",
    fullName: "Isha Iyer",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/16.jpg",
  },
  {
    email: "radhika.nair@example.in",
    fullName: "Radhika Nair",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/17.jpg",
  },
  {
    email: "tanvi.rao@example.in",
    fullName: "Tanvi Rao",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/18.jpg",
  },

  // Male Users
  {
    email: "arjun.kumar@example.in",
    fullName: "Arjun Kumar",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    email: "rahul.sharma@example.in",
    fullName: "Rahul Sharma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    email: "varun.patel@example.in",
    fullName: "Varun Patel",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    email: "rohit.verma@example.in",
    fullName: "Rohit Verma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    email: "siddharth.mishra@example.in",
    fullName: "Siddharth Mishra",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    email: "vikram.iyer@example.in",
    fullName: "Vikram Iyer",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/16.jpg",
  },
  {
    email: "anish.nair@example.in",
    fullName: "Anish Nair",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/17.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();
