import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";

   import python from './Python.png';
   import c from './C.png';
   import cpp from './Cpp.png';
   import flutter from './Flutter.png';
   import corizo from '../assets/company/corizo.png';
   import wine from '../assets/wine.png';
   import Air from '../assets/Air.png';
   import Churn from '../assets/Churn.png';
   import StockMarket from '../assets/StockMarket.png';
   import Abin from '../assets/Abin.png';

  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Data Scientist",
      icon: creator,
    },
    {
      title: "Software Developer",
      icon: backend,
    },
    {
      title: "Android Developer",
      icon: mobile,  
    },
  ];
  
  const technologies = [
    {
      name: "python",
      icon: python,  
    },
    {
      name: "C",
      icon: c,  
    },
    {
      name: "C++",
      icon: cpp,  
    },
    {
      name: "Flutter",
      icon: flutter,  
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Data Science Internship",
      company_name: "Corizo",
      icon: corizo,
      iconBg: "#ffffff",
      date: "Dec 2022 - March 2023",
      points: [
        "Python programming syntax, Pandas, Numpy, Matplotlib, Sklearn, Ensemble Learning, Neural Network, OpenCV, Keras, TensorFlow",
        "Developing different ML models, Transforming Data, Dealing with unstructured data and data stream",
        "EDA, Confusion matrix, K-Means, DBSCAN- Understanding root and border node",
        "Participating in team project and providing efficient solution for predicting quality of wine samples.",
      ],
    },
    
  ];  // add more experience inside this list
  
  const testimonials = [
    {
      testimonial:
        "A great journey to lead with Data Science Enthusiast",
      name: "Abin Varghese",
      designation: "Data Scientist",
      company: "",
      image: Abin,
    },
    
  ];
  
  const projects = [
    {
      name: "Wine Quality Prediction",
      description:
        "Predicted the quality of wine with the wine samples provided to us. With the help of MinMaxScaler, normalized the values in the dataaset. Normalization is an efficient process to transform data. Then used Random Forest Classifier, an ensembled learning technique for classification of the samples. Achieved the model score that was varying around 74.2-79%",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "jupyter",
          color: "green-text-gradient",
        },
        {
          name: "machine-learning",
          color: "orange-text-gradient",
        },
      ],
      image: wine,
      source_code_link: "https://github.com/",
    },
    {
      name: "Airfare Price Prediction",
      description:
        "Predicted the ticket fares, that gets affected due to different factors. Such as type of airline, source, destination, route, hours, number of stops and so on. Transformed the data and with the help of correlation, able to check the strength of relationship between features. ",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "jupyter",
          color: "green-text-gradient",
        },
        {
          name: "machine-learning",
          color: "orange-text-gradient",
        },
      ],
      image: Air,
      source_code_link: "https://github.com/",
    },
    {
      name: "Churn Prediction",
      description:
        "Project is based on giving an outcome based on yes or no, on the grounds of whether a customer is likely to return or not. Userd randomforestclassifier algorithm to train model. A cross validation score of 0.89576 is achieved. ",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "jupyter",
          color: "green-text-gradient",
        },
        {
          name: "machine-learning",
          color: "orange-text-gradient",
        },
      ],
      image: Churn,
      source_code_link: "https://github.com/",
    },
    {
      name: "Basic Stock Market Analysis Prediction using LSTM",
      description:
        "This project focuses on 4 technology giants i.e. APPL, GOOG, NVDA and AMZN. It used LSTM i.e. Long Short Term Model. With yfinance python library, we can conveniently access to the Yahoo Finance API. Managed to determine the value that a person can risk by investing on particular stock. It used LSTM prediction technique to get the future stock behaviour of techs.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "jupyter",
          color: "green-text-gradient",
        },
        {
          name: "machine-learning",
          color: "orange-text-gradient",
        },
      ],
      image: StockMarket,
      source_code_link: "https://github.com/",
    },
   
  ];
  
  export default { python, c, cpp, flutter, corizo};
  export { services, technologies, experiences, testimonials, projects };
