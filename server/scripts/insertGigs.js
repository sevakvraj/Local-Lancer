const mongoose = require('mongoose');
const Gig = require('../models/Gig');

const MONGO_URI = 'mongodb://localhost:27017/freelancer_marketplace';
const CLIENT_USER_ID = '6522e7c8f1a2b3c4d5e6f7a8'; // Example ObjectId, replace with your actual client user id if needed

const gigs = [
  // Ahmedabad Gigs
  {
    title: "React Native Developer for E-commerce App",
    description: "Looking for an experienced React Native developer to build a mobile app for our online store. Must have experience with Redux and payment gateway integration. Based in Ahmedabad.",
    category: "Development",
    budget: 90000,
    client: CLIENT_USER_ID,
    status: "open",
    location: { type: "Point", coordinates: [72.5714, 23.0225] }
  },
  {
    title: "Private Chef for a Weekend Dinner Party",
    description: "Seeking a professional chef to prepare a 5-course Italian meal for a dinner party of 10 people in the Satellite area. All ingredients will be provided.",
    category: "Chef",
    budget: 25000,
    client: CLIENT_USER_ID,
    status: "open",
    location: { type: "Point", coordinates: [72.5052, 23.0225] }
  },
  {
    title: "Technical Writer for API Documentation",
    description: "We need a skilled technical writer to create clear and concise documentation for our new set of APIs. Project is based in our Gandhinagar office, near Ahmedabad.",
    category: "Writing",
    budget: 40000,
    client: CLIENT_USER_ID,
    status: "open",
    location: { type: "Point", coordinates: [72.6367, 23.2156] }
  },
  {
    _id: '66d76009f25f142b2d597000',
    title: "React Native Developer for E-commerce App",
    description: "Looking for an experienced React Native developer to build a mobile app...",
    budget: 1200,
    client: '6522e7c8df1a2b3c4d5ef7a8',
    status: "open",
    location: { type: "Point", coordinates: [72.5287, 23.0337] }
  },
  {
    _id: '66d76009f25f142b2d597001',
    title: "Private Chef for a Weekend Dinner Party",
    description: "Seeking a professional chef to prepare a 5-course Italian meal for a d...",
    category: "Chef",
    budget: 350,
    client: '6522e7c8df1a2b3c4d5ef7a8',
    status: "open",
    location: { type: "Point", coordinates: [72.5186, 23.0277] }
  },
  {
    _id: '66d76009f25f142b2d597002',
    title: "Technical Writer for API Documentation",
    description: "We need a skilled technical writer to create clear and concise documen...",
    category: "Writing",
    budget: 500,
    client: '6522e7c8df1a2b3c4d5ef7a8',
    status: "open",
    location: { type: "Point", coordinates: [72.5584, 23.0285] }
  },
  {
    title: "React Native Developer for E-commerce App",
    description: "Looking for an experienced React Native developer to build a mobile app for our online store. Must have experience with Redux and payment gateway integration. Based in Ahmedabad.",
    category: "Development",
    budget: 1200,
    client: CLIENT_USER_ID,
    status: "open",
    location: { type: "Point", coordinates: [72.5714, 23.0225] }
  },
  {
    title: "Private Chef for a Weekend Dinner Party",
    description: "Seeking a professional chef to prepare a 5-course Italian meal for a dinner party of 10 people in the Satellite area. All ingredients will be provided.",
    category: "Chef",
    budget: 350,
    client: CLIENT_USER_ID,
    status: "open",
    location: { type: "Point", coordinates: [72.5052, 23.0225] }
  },
  {
    title: "Technical Writer for API Documentation",
    description: "We need a skilled technical writer to create clear and concise documentation for our new set of APIs. Project is based in our Gandhinagar office, near Ahmedabad.",
    category: "Writing",
    budget: 500,
    client: CLIENT_USER_ID,
    status: "open",
    location: { type: "Point", coordinates: [72.6367, 23.2156] }
  },
  // Vadodara Gigs
  {
    title: "High School Physics Tutor",
    description: "Need an experienced tutor for a 12th-grade student struggling with physics. Sessions to be held twice a week in the Alkapuri area of Vadodara.",
    category: "Teacher",
    budget: 80,
    client: CLIENT_USER_ID,
    status: "open",
    location: { type: "Point", coordinates: [73.1691, 22.3105] }
  },
  {
    title: "Wedding Videographer for a 2-Day Event",
    description: "Looking for a creative videographer to capture a wedding ceremony and reception in Vadodara. Must provide a 5-minute highlight reel and full footage.",
    category: "Videographer",
    budget: 900,
    client: CLIENT_USER_ID,
    status: "open",
    location: { type: "Point", coordinates: [73.1812, 22.3072] }
  },
  {
    title: "Graphic Designer for Social Media Posts",
    description: "Our marketing agency in Vadodara needs a freelance graphic designer to create 20 social media posts per month for our clients. Experience with Canva and Adobe Illustrator is a must.",
    category: "Design",
    budget: 400,
    client: CLIENT_USER_ID,
    status: "open",
    location: { type: "Point", coordinates: [73.2073, 22.3001] }
  },
  // Nadiad Gigs
  {
    title: "Home Cook / Chef for Daily Meals",
    description: "Seeking a reliable cook to prepare daily lunch and dinner (Monday-Friday) for a family of four in Nadiad. Focus on healthy, vegetarian Gujarati cuisine.",
    category: "Chef",
    budget: 250,
    client: CLIENT_USER_ID,
    status: "open",
    location: { type: "Point", coordinates: [72.8634, 22.6916] }
  },
  {
    title: "English Language Teacher for Young Children",
    description: "An after-school program in Nadiad is looking for an engaging English teacher for children aged 6-10. Must be fluent and have experience with kids.",
    category: "Teacher",
    budget: 100,
    client: CLIENT_USER_ID,
    status: "open",
    location: { type: "Point", coordinates: [72.8680, 22.6950] }
  },
  {
    title: "Part-Time Waiter for a Cafe",
    description: "Busy cafe near the Nadiad bus stand requires a part-time waiter for evening shifts, 6 PM to 10 PM. Good communication skills are essential.",
    category: "Waiter",
    budget: 120,
    client: CLIENT_USER_ID,
    status: "open",
    location: { type: "Point", coordinates: [72.8596, 22.6938] }
  },
    // New Nadiad Gigs
    {
      title: "Home Cook / Chef for Daily Meals",
      description: "Seeking a reliable cook to prepare daily lunch and dinner (Monday-Friday) for a family of four near Santram Mandir, Nadiad.",
      category: "Chef",
      budget: 250,
      client: CLIENT_USER_ID,
      status: "open",
      location: { type: "Point", coordinates: [72.8628, 22.7011] }
    },
    {
      title: "English Language Teacher for Young Children",
      description: "An after-school program on College Road in Nadiad is looking for an engaging English teacher for children aged 6-10.",
      category: "Teacher",
      budget: 100,
      client: CLIENT_USER_ID,
      status: "open",
      location: { type: "Point", coordinates: [72.8715, 22.7055] }
    },
    {
      title: "Part-Time Waiter for a Cafe",
      description: "Busy cafe near the Nadiad railway station requires a part-time waiter for evening shifts, 6 PM to 10 PM. Good communication skills are essential.",
      category: "Waiter",
      budget: 120,
      client: CLIENT_USER_ID,
      status: "open",
      location: { type: "Point", coordinates: [72.8596, 22.6963] }
    },
  // Anand Gigs
  {
    title: "Node.js Developer for Backend API",
    description: "Startup based in Anand looking for a freelance Node.js/Express developer to build out our REST API. Experience with MongoDB is required. Remote work is possible but local is preferred.",
    category: "Development",
    budget: 750,
    client: CLIENT_USER_ID,
    status: "open",
    location: { type: "Point", coordinates: [72.9278, 22.5645] }
  },
  {
    title: "Content Writer for a Travel Blog",
    description: "We need a creative writer from Anand to write 4 blog posts (1000 words each) about hidden gems and travel spots in and around Gujarat.",
    category: "Writing",
    budget: 200,
    client: CLIENT_USER_ID,
    status: "open",
    location: { type: "Point", coordinates: [72.9588, 22.5600] }
  },
  {
    title: "Mathematics Home Tutor for Grade 10",
    description: "Searching for a patient and skilled math tutor for a CBSE Grade 10 student in Anand. Must cover algebra, geometry, and trigonometry.",
    category: "Teacher",
    budget: 90,
    client: CLIENT_USER_ID,
    status: "open",
    location: { type: "Point", coordinates: [72.9299, 22.5595] }
  },
  // Surat Gigs
  {
    title: "Promotional Videographer for a Restaurant",
    description: "A new restaurant in the Piplod area of Surat needs a 60-second promotional video for social media. Must have experience with food videography.",
    category: "Videographer",
    budget: 550,
    client: CLIENT_USER_ID,
    status: "open",
    location: { type: "Point", coordinates: [72.7733, 21.1593] }
  },
  {
    title: "Event Staff / Waiters for Corporate Event",
    description: "Hiring 5-6 professional waiters for a corporate event at a hotel in Surat. Must be well-groomed and experienced. 6-hour shift.",
    category: "Waiter",
    budget: 180,
    client: CLIENT_USER_ID,
    status: "open",
    location: { type: "Point", coordinates: [72.8311, 21.1702] }
  },
  {
    title: "UI/UX Designer for a Mobile App",
    description: "We are a tech company in Surat looking for a talented UI/UX designer to revamp our existing mobile application. Must provide a portfolio of previous design work.",
    category: "Design",
    budget: 1000,
    client: CLIENT_USER_ID,
    status: "open",
    location: { type: "Point", coordinates: [72.8197, 21.1950] }
  }
];

async function insertGigs() {
  await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  await Gig.insertMany(gigs);
  console.log('Gigs inserted!');
  mongoose.disconnect();
}

insertGigs();
