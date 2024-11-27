export interface Client {
  id: number;
  title: string;
  images: string[];
  location: string;
  date: string;
  service: string;
  description: string;
  testimonial: string;
  rating: number;
  facebookVideo: string;
  videoThumbnail: string;
  videoDescription: string;
}

export const clients: Client[] = [
  {
    id: 1,
    title: '2X OFFLOAD record but now successful Direct Flight from Manila to Dubai UAE!',
    images: ['/assets/clients/1/1.jpg', '/assets/clients/1/2.jpg', '/assets/clients/1/3.jpg'],
    location: 'Dubai International Airport',
    date: 'November 19, 2024',
    service: 'Visa Assistance Service',
    description: 'Thanks again Sir. Ervin for choosing and trusting Journey Makers! Thanks for letting us assist your travel journey to Dubai, UAE!',
    testimonial: 'The service was excellent! Our driver was professional and punctual.',
    rating: 5,
    facebookVideo: 'https://www.facebook.com/share/v/78oUz7J1VmmaSFJD/',
    videoThumbnail: '/assets/clients/1/1.jpg',
    videoDescription: '2X OFFLOAD record but now successful Direct Flight from Manila to Dubai UAE! Every journey starts with a choice. Thank you for choosing us Sir Ervin and welcome to Dubai!'
  },
  {
    id: 2,
    title: 'Successful Direct Flight from Manila to Dubai UAE via Employment Visa with a previous 4x offload record!',
    images: ['/assets/clients/2/1.jpg', '/assets/clients/2/2.jpg'],
    location: 'Dubai International Airport',
    date: 'November 10, 2024',
    service: 'Visa Assistance Service',
    description: 'Thank you again Sir Marlon! We at Journey Makers are truly grateful that you chose us to process your journey to Dubai, UAE. Your trust in our expertise means the world to us. Welcome to Dubai!',
    testimonial: 'Very comfortable ride and friendly service. Highly recommended!',
    rating: 5,
    facebookVideo: 'https://www.facebook.com/share/v/Qxms4sfZgLYXz81u/',
    videoThumbnail: '/assets/clients/2/1.jpg',
    videoDescription: '4x OFFLOAD record but now successful Direct Flight from Manila to Dubai UAE via Employment Visa! Thank you for choosing Journey Makers for your travel needs Sir Marlon! We truly appreciate your trust in our services. Welcome to Dubai!'
  },
  {
    id: 3,
    title: 'From 2X Offload to TOUCHDOWN Dubai!',
    images: ['/assets/clients/3/1.jpg'],
    location: 'Dubai International Airport',
    date: 'November 3, 2024',
    service: 'Visa Assistance Service',
    description: "Don't let visa hurdles stand in the way of your UAE Dubai adventures. Trust Journey Makers to be your reliable partner in securing the necessary documentation for your international travels. Contact us today and embark on your journey with confidence and peace of mind.",
    testimonial: 'Amazing city tour experience! The guide was knowledgeable and friendly.',
    rating: 5,
    facebookVideo: 'https://www.facebook.com/share/v/fPMVRMR5p6hi8hgk/',
    videoThumbnail: '/assets/clients/3/1.jpg',
    videoDescription: "From 2X Offload to TOUCHDOWN Dubai! Thank you for trusting us with processing the documents needed and welcome to Dubai! Don't let visa hurdles stand in the way of your UAE Dubai adventures. Trust Journey Makers to be your reliable partner in securing the necessary documentation for your international travels. Contact us today and embark on your journey with confidence and peace of mind."
  }
];