import Container from "@/components/container";
import {GiftIcon, UsersIcon} from "@heroicons/react/16/solid";
import Icon from "@/components/home-icon";

const Home = () => {
   return (
      <Container>
          <h1 className="text-5xl font-bold">Welcome, </h1>
          <div className="flex flex-wrap gap-4 md:gap-8 lg:gap-12 mt-5">
              <Icon title="Models" icon={<UsersIcon/>} count={0} subtitle="total created"/>
              <Icon title="Posts" icon={<GiftIcon/>} count={0} subtitle="total posted"/>
          </div>
      </Container>
  );
};

export default Home;
