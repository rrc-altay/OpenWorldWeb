import PageContainer from "@/components/Containers/PageContainer/PageContainer";
import BoxContainer from "@/components/Containers/BoxContainer/BoxContainer";
import MainContainer from "@/components/Containers/MainContainer/MainContainer";

const Index = () => {
  return (
    <MainContainer>
      <PageContainer breadCrumbs={[{ href: "/", title: "Новости" }]}>
        <BoxContainer title="Обратная связь">
          <div>Ok</div>
        </BoxContainer>
      </PageContainer>
    </MainContainer>
  );
};

export default Index;
