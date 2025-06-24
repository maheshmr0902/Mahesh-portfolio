import Work1 from '../../assets/assets/Screenshot (9).png';
import Work2 from '../../assets/assets/Privacy.jpeg';
import Work3 from '../../assets/Fresh-basket.png';

export const projectData = [
  {
    id: 1,
    image: Work1,
    title: 'E-Crime Portal',
    category: 'web',
    description: `
      <strong>Overview:</strong><br />
      The E-Crime Portal is a secure platform enabling users to report digital offenses online with ease.<br /><br />
      
      <strong>Features:</strong>
      <ul>
        <li>User authentication and complaint submission with tracking</li>
        <li>Admin panel for police to manage complaints and respond</li>
        <li>JWT-based login, OTP verification, and secure sessions</li>
        <li>Role-based access with data protection</li>
      </ul>

      <strong>Tech Stack:</strong>
      <ul>
        <li>MERN Stack: MongoDB, Express, React, Node.js</li>
        <li>Security: JWT, bcrypt, OTP, secure routing</li>
      </ul>
    `,
  },
  {
    id: 2,
    image: Work2,
    title: 'Privacy Assurance Guardian',
    category: 'cloud',
    description: `
      <strong>Overview:</strong><br />
      A cloud-based encrypted file storage system with fine-grained access control.<br /><br />
      
      <strong>Features:</strong>
      <ul>
        <li>AES encryption before upload</li>
        <li>Custom access permissions</li>
        <li>Audit logs for each file event</li>
        <li>Email-based user verification</li>
      </ul>

      <strong>Tech Stack:</strong>
      <ul>
        <li>React, Node.js, MongoDB</li>
        <li>Cloud Storage: AWS S3 / Firebase</li>
      </ul>
    `,
  },
  {
    id: 3,
    image: Work3,
    title: 'Fresh-Basket',
    category: 'web',
    description: `
      <strong>Overview:</strong><br />
      Fresh_Basket is an online grocery platform focused on performance and scalability.<br /><br />

      <strong>Features:</strong>
      <ul>
        <li>Product search with filters</li>
        <li>Cart management and checkout flow</li>
        <li>Admin dashboard to manage products and users</li>
      </ul>

      <strong>Tech Stack:</strong>
      <ul>
        <li>MERN: MongoDB, Express, React, Node.js</li>
        <li>Redux for state management</li>
        <li>Tailwind CSS for styling</li>
      </ul>
    `,
  },
];


export const projectsNav = [
  { name: 'all' },
  { name: 'web' },
  { name: 'app' },
  { name: 'cloud' },
];


