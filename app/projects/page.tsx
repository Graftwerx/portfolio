import { ProjectsCard } from "@/lib/interface";
import { client } from "@/lib/sanity";
import Image from "next/image";

async function getData() {
  const query = `*[_type =="project"]{
  title,
    _id,
    link,
    description,
    tags,
    "imageUrl":image.asset->url
}`;

  const data = await client.fetch(query);

  return data;
}

export default async function ProjectsPage() {
  const data: ProjectsCard[] = await getData();
  return (
    <section className="max-w-7xl w-full px-4 md:px-8 mx-auto">
      <h1 className="text-2xl font-semibold lg:text-3xl pt-5">My Projects</h1>
      <p className="leading-7 text-muted-foreground mt-2">
        Check out a few of my recent projects
      </p>
      <div className="py-12 grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 grid-cols-1">
        {data.map((item) => (
          <a
            href={item.link}
            key={item._id}
            className="group block"
            target="_blank"
          >
            <div className="aspect-video overflow-hidden rounded-2xl relative">
              <Image
                src={item.imageUrl}
                alt="project image"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-2xl"
              />
            </div>
            <div className="mt-4">
              <h2 className="font-medium text-lg">{item.title}</h2>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
