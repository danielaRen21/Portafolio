import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import GitHubPrividers from 'next-auth/providers/github';


export default NextAuth({
  theme: {
    colorScheme: 'light', // "auto" | "dark" | "light"
    brandColor: '#020344', // Hex color code
    logo: 'https://img2.freepng.es/20180816/syp/kisspng-computer-icons-favicon-user-iconfinder-personal-we-yue-jia-fresh-my-user-icon-svg-png-icon-free-downl-5b7590572d9999.5378872315344313191868.jpg', // Absolute URL to image
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {
          label: 'Correo electrónico',
          type: 'email',
          placeholder: 'ingresa tu correo',
        },
        password: {
          label: 'Contraseña',
          type: 'password',
          placeholder: 'ingresa tu contraseña',
        },
      },

      authorize: (credentials) => {
        if (
          credentials.email === process.env.EMAIL_KEY &&
          credentials.password === process.env.PASSWORD_KEY
        ) {
          return {
            id: 1,
            name: 'Luis',
            email: 'intranet@gmail.com',
          };
        }
        return null;
      },
    }),
    GitHubPrividers({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    jwt: ({token, user}) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session: ({session, token}) => {
      if (token) {
        session.id = token.id;
      }
      return session;
    },
    async redirect({url, baseUrl = 'http://localhost:3000/'}) {
      return baseUrl;
    },
  },
  secret: 'secret',
  jwt: {
    secret: 'secret',
    encryption: true,
  },
});
