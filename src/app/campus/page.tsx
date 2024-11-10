import Image from "next/image";
export default function CampusPage() {
    return (
      <div className="campus">
      
        <h1>Campus & Facilities</h1><br />
        <div className="facilities">
          <div className="facility">
            <h2>Library</h2>
            <p>Explore our vast collection of resources.</p>
            <Image src="/lb.jpg"alt="picture" width={400} height={650} className="mt-4"/>
          </div>
          <div className="facility">
            <h2>Laboratories</h2>
            <p>State-of-the-art labs for practical learning.</p>
            <Image src="/sr.jpg"alt="picture" width={400} height={750} className="mt-4"/>
          </div>
          <div className="facility">
            <h2>Sports Complex</h2>
            <p>World-class sports facilities for students.</p>
            <Image src="/sp.jpg"alt="picture" width={400} height={650} className="mt-4"/>
          </div>
        </div>
      </div>
    );
  }






















































































