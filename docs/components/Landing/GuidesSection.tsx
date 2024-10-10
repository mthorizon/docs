import { SmartLink } from './SmartLink'

export const GuidesSection = () => (
  <section className="flex flex-col gap-5 border-t dark:border-white-10 border-black-10">
    <div className="flex flex-col gap-1 py-5">
      <h3 className="text-3xl text-themed-primary font-bold">Guides</h3>
      <BotIcon className="bot w-16 h-16" />

      <p className="text-md leading-6 font-medium dark:text-white-80 text-black-80 mr-8">
        Follow our step-by-step guides and open source code templates to accelerate your time to
        market.
      </p>
    </div>

    <div className="flex flex-wrap gap-4 md:flex-row flex-col">
      <GuideCard
        title="Build a web3 game with WebGL"
        body="Follow a step by step guide to build a web-based game demo that leverages Sequence Embedded Wallet with custom in-game achievement tokens."
        link="/guides/webgl-guide"
      />
      <GuideCard
        title="Build a web3 game with Unity"
        body="Learn how to build an engaging iOS and Android game that uses Sequence Embedded Wallets under the hood for an integrated marketplace and in-game currency."
        link="/guides/jelly-forest-unity-guide"
      />
      <GuideCard
        title="Sell your Game Items via a Webshop"
        body="Accelerate your game growth by selling items directly to your players with a webshop leveraging Sequence sale and item contracts."
        link="/guides/primary-sales"
      />
      <GuideCard
        title="Sequence Market"
        body="Build an API-driven marketplace where players can mint, then sell or buy items using a custom web-based interface leveraging Sequence Orderbook APIs."
        link="/guides/custom-marketplace"
      />
    </div>
  </section>
)

const GuideCard = ({
  title,
  body,
  link,
  image,
}: {
  title: string
  body: string
  link: string
  image?: string
}) => {
  return (
    <div className="flex flex-col gap-4 p-4 dark:bg-white-10 bg-white rounded-xl md:w-[calc(50%-8px)]">
      {image && (
        <div className="rounded-md overflow-hidden w-full aspect-[2]">
          <img src={image} className="object-cover w-full h-full" />
        </div>
      )}
      <p className="text-xl leading-7 text-themed-primary font-bold">{title}</p>
      <p className="text-themed-secondary text-md font-medium leading-6">{body}</p>
      <SmartLink
        href={link}
        className="hover-fade rounded-md dark:bg-white-15 bg-black-7 px-4 py-3 text-themed-primary text-sm font-bold w-fit"
      >
        Read guide
      </SmartLink>
    </div>
  )
}
