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
           {" (He/Him) is a full-stack developer who builds scalable applications people actually use. He loves crafting creative, intuitive frontends, while architecting robust backends that scale. Passionate about real-world impact, he’s constantly exploring new ideas—whether it's for smoother user experiences or pushing boundaries with emerging tech. He’s currently studying Computer Engineering at VGEC, Ahmedabad. If you have an interesting idea, please   "} <span className='hover:text-[#FDE037] hover:border-b hover:border-[#FDE037] border-dotted cursor-pointer'>get in touch↗.</span>
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
