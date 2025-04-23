import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";

export interface WithReduxProps {
    dispatch: AppDispatch;
    selector: RootState;
}

function withRedux<CProps extends { reduxProps: WithReduxProps }>(
    Component: React.ComponentType<CProps>
) {
    const ComponentWithRedux = (props: Omit<CProps, "reduxProps">) => {
        const dispatch = useDispatch<AppDispatch>();
        const selector = useSelector((state: RootState) => state);

        return (
            <Component {...(props as CProps)} reduxProps={{ dispatch, selector }} />
        );
    };

    return ComponentWithRedux;
}

export default withRedux;
