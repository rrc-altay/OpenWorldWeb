import PageContainer from "@/components/Containers/PageContainer/PageContainer";
import BoxContainer from "@/components/Containers/BoxContainer/BoxContainer";

const Index = () => {
  return (
    <PageContainer breadCrumbs={[{ href: "/", title: "Новости" }]}>
      <BoxContainer title="Обратная связь">
        <div>Ok</div>
      </BoxContainer>
    </PageContainer>
  );
};

export default Index;
