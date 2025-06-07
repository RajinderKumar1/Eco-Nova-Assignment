import { createClient } from "contentful";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

// Contentful GraphQL endpoint
const CONTENTFUL_GRAPHQL_ENDPOINT = `https://graphql.contentful.com/content/v1/spaces/wqswtbgwmuav`;

// Apollo Client for GraphQL
export const apolloClient = new ApolloClient({
    uri: CONTENTFUL_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
    headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
    },
});

// REST Client for fallback
export const contentfulClient = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
    environment: process.env.CONTENTFUL_ENVIRONMENT || "master",
});

// Preview client
export const previewClient = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN!,
    environment: process.env.CONTENTFUL_ENVIRONMENT || "master",
    host: "preview.contentful.com",
});


export const GET_LANDING_PAGE = gql`
  query GetLandingPage($locale: String!, $preview: Boolean = false) {
    landingPageCollection(limit: 1, locale: $locale, preview: $preview) {
      items {
        title
        slug
        seoTitle
        seoDescription
        sectionsCollection(limit: 10) {
          items {
            __typename
            ... on HeroSection {
              title
              subtitle
              description
              primaryButtonText
              primaryButtonUrl
              secondaryButtonText
              secondaryButtonUrl
              backgroundImage {
                title
                description
                url
                width
                height
              }
            }
            ... on FeaturesSection {
              title
              featuresCollection(limit: 6) {
                items {
                  __typename
                  ... on Feature {
                    title
                    description
                    icon
                  }
                }
              }
            }
            ... on CtaSection {
              title
              description
              primaryButtonText
              primaryButtonUrl
              secondaryButtonText
              secondaryButtonUrl
              backgroundImage {
                title
                description
                url
                width
                height
              }
            }
            ... on TestimonialsSection {
              title
              subtitle
              testimonialsCollection(limit: 5) {
                items {
                  __typename
                  ... on Testimonial {
                    name
                    company
                    rating
                    content
                    avatar {
                      url
                      width
                      height
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

// Types
export interface ContentfulImage {
    title: string;
    description: string;
    url: string;
    width: number;
    height: number;
}

export interface HeroSection {
    __typename: "HeroSection";
    sys: { id: string };
    title: string;
    subtitle?: string;
    description: string;
    primaryButtonText: string;
    primaryButtonUrl: string;
    secondaryButtonText?: string;
    secondaryButtonUrl?: string;
    backgroundImage?: ContentfulImage;
}

export interface Feature {
    title: string;
    description: string;
    icon: string;
    image?: ContentfulImage;
}

export interface FeaturesSection {
    __typename: "FeaturesSection";
    sys: { id: string };
    title: string;
    subtitle?: string;
    featuresCollection: {
        items: Feature[];
    };
}

export interface Testimonial {
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
    avatar?: ContentfulImage;
}

export interface TestimonialsSection {
    __typename: "TestimonialsSection";
    sys: { id: string };
    title: string;
    subtitle?: string;
    testimonialsCollection: {
        items: Testimonial[];
    };
}

export interface CtaSection {
    __typename: "CtaSection";
    sys: { id: string };
    title: string;
    description: string;
    primaryButtonText: string;
    primaryButtonUrl: string;
    secondaryButtonText?: string;
    secondaryButtonUrl?: string;
    backgroundImage?: ContentfulImage;
}

export type Section = HeroSection | FeaturesSection | TestimonialsSection | CtaSection;

export interface LandingPage {
    sys: { id: string };
    title: string;
    slug: string;
    seoTitle: string;
    seoDescription: string;
    sectionsCollection: {
        items: Section[];
    };
}
