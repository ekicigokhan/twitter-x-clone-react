import StickyHeader from "~/components/sticky-header";
import Tab from "~/components/tab";

export default function Home() {
  return (
    <>
      <Tab activeTab="for-you">
        <StickyHeader title="Anasayfa">
          <Tab.Items>
            <Tab.Item id="for-you">Sana özel</Tab.Item>
            <Tab.Item id="followings">Takip edilenler</Tab.Item>
          </Tab.Items>
        </StickyHeader>
        <Tab.Content id="for-you">Senin için !</Tab.Content>
        <Tab.Content id="followings">Takip Edilenler !</Tab.Content>
      </Tab>
    </>
  );
}
