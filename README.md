# Banking App

A finance management dashboard that connects multiple bank accounts, displays real-time transactions, and allows users to transfer funds to other users on the platform using Next.js 14, Plaid for connecting banks to apps securely, and Dwolla for sending and receiving real time transactions.

Built with: JavaScript, TypeScript, React, Next.JS 14, Appwrite, Plaid, Dwolla, Tailwind CSS

[Demo](https://banking-app-with-dwolla-and-plaid.vercel.app)

## Local Development

create an `.env` file in the root directory using the example `.env.example` template for the variables the app uses. `NEXT_PUBLIC_SITE_URL` can be replaced with a live URL if the app is to be deployed. Setup a project within Appwrite, Plaid, and Dwolla, then copy the relevant data to their corresponding environment variable.

For the database setup within Appwrite, create a database containing three collections:

| banks                                                      | transactions                     | users                                   |
| ---------------------------------------------------------- | -------------------------------- | --------------------------------------- |
| `accountId` (string) - Required                            | `name` (string) - Required       | `email` (email) - Required              |
| `bankId` (string) - Required                               | `amount` (string) - Required     | `userId` (string) - Required            |
| `accessToken` (string) - Required                          | `channel` (string) - Required    | `dwollaCustomerUrl` (string) - Required |
| `fundingSourceUrl` (string) - Required                     | `category` (string) - Required   | `dwollaCustomerId` (string) - Required  |
| `shareableId` (string) - Required                          | `senderId` (string) - Required   | `firstName` (string) - Required         |
| `userId` Many to one Relationship with `userId` from users | `receiverId` (string) - Required | `lastName` (string) - Required          |
| `userId` Many to one Relationship with `userId` from users | `receiverId` (string) - Required | `address1` (string) - Required          |
| `userId` Many to one Relationship with `userId` from users | `receiverId` (string) - Required | `city` (string) - Required              |
| `userId` Many to one Relationship with `userId` from users | `receiverId` (string) - Required | `ssn` (string) - Required               |
| `userId` Many to one Relationship with `userId` from users | `receiverId` (string) - Required | `postalCode` (string) - Required        |
| `userId` Many to one Relationship with `userId` from users | `receiverId` (string) - Required | `dateOfBirth` (string) - Required       |
| `userId` Many to one Relationship with `userId` from users | `receiverId` (string) - Required | `state` (string) - Required             |
