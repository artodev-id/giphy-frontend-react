import { GridItem, GridList, PageWrapper } from '@/components';
import React, { ReactNode } from 'react';
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "@/redux/store";
import { GiphyApi } from "@/redux/services/giphyApi";

const Api = GiphyApi.endpoints.getIronMan;

const mapState = (state: RootState) => ({
    giphys: Api.select()(state)
});

const mapDispatch = {
    getIronMan: Api.initiate,
};
const connector = connect(mapState, mapDispatch);
type GiphyListProps = ConnectedProps<typeof connector>;


class GiphyList extends React.Component<GiphyListProps>{
    
    unsubscribe: null | (() => void) = null;

    componentDidMount() {
        const { getIronMan } = this.props;
        const { unsubscribe } = getIronMan();    
        this.unsubscribe = unsubscribe;
    }

    componentWillUnmount() {
        this.unsubscribe?.();
    }

    render(): ReactNode {

        const { data, isLoading } = this.props.giphys;
        
        return(
            <PageWrapper title='Iron Man Giphy'>
                {/* List items here */}
                <div className='container'>
                    <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
                        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
                        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
                    </div>
                    <GridList data={data?.data || []} isLoading={isLoading}/>
                   
                </div>
            </PageWrapper>
        )
    }
    
}

export default connector(GiphyList);
