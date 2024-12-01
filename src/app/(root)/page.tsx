import HireMe from "@/components/hire-me";
import HomeAbout from "@/components/home-about";
import HomeBlogs from "@/components/home-blogs";
import HomeHero from "@/components/home-hero";
import HomeProjects from "@/components/home-projects";
import HomeSkills from "@/components/home-skills";
import InfiniteTextScroll from "@/components/infinite-text-scroll";
// import { client } from "@/sanity/lib/client";
import { GET_10_BLOGS, PROJECT_HOME, TAGS } from "@/sanity/lib/queries";
import { sanityFetch } from '@/sanity/lib/live'


export default async function Home() {

  // const blogs = await client.fetch(GET_10_BLOGS)
  // const tags = await client.fetch(TAGS)
  // const projects = await client.fetch(PROJECT_HOME)
  const { data: blogs } = await sanityFetch({ query: GET_10_BLOGS, tag: "post" })
  const { data: tags } = await sanityFetch({ query: TAGS, tag: "tag" })
  const { data: projects } = await sanityFetch({ query: PROJECT_HOME, tag: "project" })
  return (
    <main>
      <HomeHero />
      <InfiniteTextScroll />
      <HomeAbout />
      <HomeSkills />
      <HomeProjects
        tags={tags}
        projects={projects}
      />
      <HomeBlogs
        blogs={blogs}
      />
      <HireMe />
    </main>
  );
}
