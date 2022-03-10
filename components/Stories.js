const stories = [
  {
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profiles: "https://links.papareact.com/zvy",
  },

  {
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profiles: "https://links.papareact.com/kxk",
  },

  {
    name: "Jeff Bezos",
    src: "https://links.papareact.com/k2j",
    profiles: "https://links.papareact.com/f0p",
  },

  {
    name: "Mark Zukerberg",
    src: "https://links.papareact.com/xql",
    profiles: "https://links.papareact.com/snf",
  },

  {
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profiles: "https://links.papareact.com/zvy",
  },
];
import StoryCard from "./StoryCard";

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profiles={story.profiles}
        />
      ))}
    </div>
  );
}

export default Stories;
