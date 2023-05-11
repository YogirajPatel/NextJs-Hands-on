import NextAuth from 'next-auth/next';
import GithubProviders from 'next-auth/providers/github';

export const auth = {
  providers: [
    GithubProviders({
      clientId: '28e6206e5d279dc2028e',
      clientSecret: '5cc86961a2acce1e8a8142425118834836d34134',
    }),
  ],
};

export default NextAuth(auth);
