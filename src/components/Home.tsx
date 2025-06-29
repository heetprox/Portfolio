import React from 'react'
import { LanyardResponse } from 'react-use-lanyard'
import { teamData } from '@/data'
import ActivityCard from './ActivityCard';

const insertSuperscripts = (description: string, superscripts?: { text: string; position: number }[]) => {
  if (!superscripts || superscripts.length === 0) return description;

  const sorted = [...superscripts].sort((a, b) => b.position - a.position);
  let result = description;

  sorted.forEach(sup => {
    result =
      result.substring(0, sup.position) +
      `<span class="text-xs align-super">${sup.text}</span>` +
      result.substring(sup.position);
  });

  return result;
};

// Insert links with arrow symbols
const insertLinks = (text: string, links: { text: string; position: number }[]) => {
  let result = text;
  let offset = 0;

  // Sort links by position
  const sorted = [...links].sort((a, b) => a.position - b.position);

  sorted.forEach(link => {
    const linkText = link.text;
    const startPos = result.indexOf(linkText, offset);

    if (startPos !== -1) {
      const before = result.substring(0, startPos);
      const after = result.substring(startPos + linkText.length);

      result =
        before +
        `<span class="relative">${linkText}<span class="absolute -top-1 -right-2 text-xs">↗</span></span>` +
        after;

      offset = startPos + linkText.length + 60;
    }
  });

  return result;
};

const Home = ({ activity }: { activity: LanyardResponse | undefined }) => {
  return (
    <div className="min-h-[40vh] bg-[#131313] text-white pt-16">
      <div className="mx-auto px-4 py-10 flex "
        style={{
          fontSize: "clamp(0.85rem, 0.9vw, 240rem)",
          padding: "clamp(0.75rem, 0.75vw, 240rem) clamp(0.75rem, 0.75vw, 240rem)",
          marginTop: "clamp(0.75rem, 0.75vw, 240rem)",
        }}>

        <div className="w-full flex flex-col md:flex-row
        "
        style={{
          gap: "clamp(1rem, 1vw, 240rem)",
        }}
        >
          <div className="flex flex-col md:w-[50%] w-full"
          style={{
            gap: "clamp(0.5rem, 1vw, 240rem)",
          }}
          >
            <h3
              style={{
               fontSize: "clamp(0.75rem, 0.7vw, 240rem)",
           
              }}
              className="uppercase mono font-medium mb-4 text-white/40">About</h3>
            <p className="mb-4 md:w-[70%] w-full leading-tight" >
              Jo (He/Him) designs interfaces. He thrives in complex, ambiguous problem spaces focused around interactive media, digital tooling, and multimodal interaction. He studied Communication Design↗ and Human-Computer Interaction↗ at Carnegie Mellon University, an experience he holds fondly and will cherish for the rest of his life. If you have an interesting idea, please get in touch↗.
            </p>
           
            <div className=" p-4 w-fit">
              <ActivityCard userId="1118212847613247558" initialData={activity} />
            </div>
          </div>

          <div className="md:w-[50%] w-full">
            <div style={{ display: "flex", width: "100%" }}>
              <div style={{ width: "35%" }}>
                <h3
                  style={{
                   fontSize: "clamp(0.75rem, 0.7vw, 240rem)",
                    paddingBottom: "clamp(0.5rem, 1vw, 240rem)",
                  }}
                  className="uppercase mono tracking-wide font-medium mb-4 text-white/40">TEAM</h3>
              </div>

              <div style={{ width: "65%" }}>
                <h3
                  style={{
                   fontSize: "clamp(0.75rem, 0.7vw, 240rem)",
                    paddingBottom: "clamp(0.5rem, 0.75vw, 240rem)",
                  }}
                  className="uppercase mono tracking-wide font-medium mb-4 text-white/40">DESCRIPTION</h3>
              </div>
            </div>

            <table
              className="w-full"
              cellPadding="0"
            >
              <tbody>
                {teamData.map((entry, index) => (
                  <tr key={index}>
                    <td className="align-top w-[35%] leading-tight" style={{ verticalAlign: "top" }}>
                      <h4>{entry.company}</h4>
                      {entry.period && <p style={{
                        paddingBottom: "clamp(0.5rem, 1vw, 240rem)",
                      }}>{entry.period}</p>}
                    </td>
                    <td className="align-top w-[65%]" style={{ verticalAlign: "top" }}>
                      {entry.superscripts ? (
                        <p dangerouslySetInnerHTML={{ __html: insertSuperscripts(entry.description, entry.superscripts) }} />
                      ) : (
                        <p className='leading-tight'>{entry.description}</p>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
