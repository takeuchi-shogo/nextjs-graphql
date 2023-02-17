import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Accounts = {
  __typename?: 'Accounts';
  access_level: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['ID'];
  login_status: Scalars['Boolean'];
  password: Scalars['String'];
  phone_number: Scalars['String'];
};

export type Blocks = {
  __typename?: 'Blocks';
  blocked: Scalars['Int'];
  blocking: Scalars['Int'];
  id: Scalars['ID'];
};

export type Matches = {
  __typename?: 'Matches';
  female_user_id: Scalars['Int'];
  id: Scalars['ID'];
  male_user_id: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAccount: Accounts;
  createAccountAndUser: Users;
  createBlock: Blocks;
  createReport: Reports;
  createUser: Users;
  createVerifyEmail: VerifyEmails;
};


export type MutationCreateAccountArgs = {
  input?: InputMaybe<NewAccounts>;
};


export type MutationCreateAccountAndUserArgs = {
  account: NewAccounts;
  user: NewUsers;
};


export type MutationCreateBlockArgs = {
  input?: InputMaybe<NewBlocks>;
};


export type MutationCreateReportArgs = {
  input?: InputMaybe<NewReports>;
};


export type MutationCreateUserArgs = {
  input?: InputMaybe<NewUsers>;
};


export type MutationCreateVerifyEmailArgs = {
  input?: InputMaybe<NewVerifyEmails>;
};

export type NewAccounts = {
  email: Scalars['String'];
  password: Scalars['String'];
  phone_number: Scalars['String'];
};

export type NewBlocks = {
  blocked: Scalars['Int'];
  blocking: Scalars['Int'];
};

export type NewReports = {
  reason: Scalars['String'];
  reported_id: Scalars['Int'];
  reporter_id: Scalars['Int'];
};

export type NewUsers = {
  display_name: Scalars['String'];
  gender: Scalars['String'];
  screen_name: Scalars['String'];
};

export type NewVerifyEmails = {
  email: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  account: Accounts;
  block: Blocks;
  blocks: Array<Blocks>;
  report: Reports;
  reports: Array<Reports>;
  user: Users;
  users: Array<Users>;
  verify_email: VerifyEmails;
};


export type QueryAccountArgs = {
  id: Scalars['ID'];
};


export type QueryBlockArgs = {
  id: Scalars['ID'];
};


export type QueryReportArgs = {
  id: Scalars['ID'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryVerify_EmailArgs = {
  code: Scalars['String'];
};

export type Reports = {
  __typename?: 'Reports';
  id: Scalars['ID'];
  reason: Scalars['String'];
  reported_id: Scalars['Int'];
  reporter_id: Scalars['Int'];
};

export type UserProfiles = {
  __typename?: 'UserProfiles';
  description: Scalars['String'];
  id: Scalars['ID'];
  interests: Scalars['String'];
  looking_for: Scalars['String'];
  user_id: Scalars['Int'];
};

export type Users = {
  __typename?: 'Users';
  account_id: Scalars['Int'];
  display_name: Scalars['String'];
  gender: Scalars['String'];
  id: Scalars['ID'];
  is_authorize_email: Scalars['Boolean'];
  is_verified_age: Scalars['Boolean'];
  is_verified_email: Scalars['Boolean'];
  location: Scalars['String'];
  screen_name: Scalars['String'];
};

export type VerifyEmails = {
  __typename?: 'VerifyEmails';
  Email: Scalars['String'];
  PINCode: Scalars['String'];
  Token: Scalars['String'];
  id: Scalars['ID'];
};

export type CreateAccountMutationVariables = Exact<{
  account?: InputMaybe<NewAccounts>;
}>;


export type CreateAccountMutation = { __typename?: 'Mutation', createAccount: { __typename?: 'Accounts', phone_number: string, email: string, password: string } };

export type CreateUserMutationVariables = Exact<{
  user?: InputMaybe<NewUsers>;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'Users', display_name: string, screen_name: string, gender: string, location: string } };

export type CreateAccountAndUserMutationVariables = Exact<{
  account: NewAccounts;
  user: NewUsers;
}>;


export type CreateAccountAndUserMutation = { __typename?: 'Mutation', createAccountAndUser: { __typename?: 'Users', display_name: string, screen_name: string, gender: string, location: string } };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'Users', id: string, display_name: string }> };


export const CreateAccountDocument = gql`
    mutation CreateAccount($account: NewAccounts) {
  createAccount(input: $account) {
    phone_number
    email
    password
  }
}
    `;
export type CreateAccountMutationFn = Apollo.MutationFunction<CreateAccountMutation, CreateAccountMutationVariables>;

/**
 * __useCreateAccountMutation__
 *
 * To run a mutation, you first call `useCreateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAccountMutation, { data, loading, error }] = useCreateAccountMutation({
 *   variables: {
 *      account: // value for 'account'
 *   },
 * });
 */
export function useCreateAccountMutation(baseOptions?: Apollo.MutationHookOptions<CreateAccountMutation, CreateAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAccountMutation, CreateAccountMutationVariables>(CreateAccountDocument, options);
      }
export type CreateAccountMutationHookResult = ReturnType<typeof useCreateAccountMutation>;
export type CreateAccountMutationResult = Apollo.MutationResult<CreateAccountMutation>;
export type CreateAccountMutationOptions = Apollo.BaseMutationOptions<CreateAccountMutation, CreateAccountMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($user: NewUsers) {
  createUser(input: $user) {
    display_name
    screen_name
    gender
    location
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const CreateAccountAndUserDocument = gql`
    mutation CreateAccountAndUser($account: NewAccounts!, $user: NewUsers!) {
  createAccountAndUser(account: $account, user: $user) {
    display_name
    screen_name
    gender
    location
  }
}
    `;
export type CreateAccountAndUserMutationFn = Apollo.MutationFunction<CreateAccountAndUserMutation, CreateAccountAndUserMutationVariables>;

/**
 * __useCreateAccountAndUserMutation__
 *
 * To run a mutation, you first call `useCreateAccountAndUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAccountAndUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAccountAndUserMutation, { data, loading, error }] = useCreateAccountAndUserMutation({
 *   variables: {
 *      account: // value for 'account'
 *      user: // value for 'user'
 *   },
 * });
 */
export function useCreateAccountAndUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateAccountAndUserMutation, CreateAccountAndUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAccountAndUserMutation, CreateAccountAndUserMutationVariables>(CreateAccountAndUserDocument, options);
      }
export type CreateAccountAndUserMutationHookResult = ReturnType<typeof useCreateAccountAndUserMutation>;
export type CreateAccountAndUserMutationResult = Apollo.MutationResult<CreateAccountAndUserMutation>;
export type CreateAccountAndUserMutationOptions = Apollo.BaseMutationOptions<CreateAccountAndUserMutation, CreateAccountAndUserMutationVariables>;
export const UsersDocument = gql`
    query users {
  users {
    id
    display_name
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;