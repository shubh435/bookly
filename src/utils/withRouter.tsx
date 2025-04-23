import { useLocation, useNavigate, useParams } from "react-router-dom";

export interface WithRouterProps {
    location: ReturnType<typeof useLocation>;
    params: Record<string, string>;
    navigate: ReturnType<typeof useNavigate>;
}

function withRouter<CProps extends { navigation: WithRouterProps }>(Component: React.ComponentType<CProps>) {
    function ComponentWithRouterProp(props: Omit<CProps, "navigation">) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return <Component {...(props as CProps)} navigation={{ location, navigate, params }} />;
    }

    return ComponentWithRouterProp;
}

export default withRouter;