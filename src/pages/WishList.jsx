import React, { useContext, useEffect } from "react";
import CardContainer from "../components/CardContainer";
import CardGrid from "../components/CardGrid";
import EmptyPage from "../components/Empty";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Layout from "../components/Layout";
const WishList = () => {
  const { currentUser, getBookmark, wishList } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!currentUser) navigate("/");
    (async () => {
      await getBookmark();
    })();
  }, [currentUser]);

  return (
    <Layout>
      <section style={{ paddingTop: "10rem" }}>
        <CardContainer title={`Wishlist Page`}>
          {wishList.length === 0 ? (
            <EmptyPage page="Wishlist" />
          ) : (
            <CardGrid data={wishList} />
          )}
        </CardContainer>
      </section>
    </Layout>
  );
};

export default WishList;
