import { GridItem, GridList, PageWrapper, SearchInput } from '@/components';
import React from 'react';
import { connect, ConnectedProps } from "react-redux";
import { RootState, store } from "@/redux/store";
import { GiphyApi } from "@/redux/services/giphyApi";

const Api = GiphyApi.endpoints.searchTerm;

const mapState = (state: RootState ) => ({
    giphys: Api.select("")(state)
});

const mapDispatch = {
    getGiphy: Api.initiate,
};
const connector = connect(mapState, mapDispatch);
type GiphyListProps = ConnectedProps<typeof connector>;


class Search extends React.Component<GiphyListProps, { terms?: null | string }>{
    state = {
        terms: null   
    }
    unsubscribe: null | (() => void) = null;
    
    componentDidMount() {
        // const { getGiphy } = this.props;
        // const { unsubscribe } = getGiphy(this.state.terms || '');    
        // this.unsubscribe = unsubscribe;
    }
   
    componentWillUnmount() {
        this.unsubscribe?.();
    }

    onSearchHandle(terms: string){
        this.setState({terms})
    }

    componentDidUpdate(prevProps: GiphyListProps, prevState: { terms?: null | string }) {
        const { getGiphy } = this.props;
        if (this.state.terms !== prevState.terms) {
         // getGiphy(this.state.terms || '');
          store.dispatch(Api.initiate(this.state.terms || ''));
          
        }
      }

   
   

    render(): React.ReactNode {
        
        const { data, isLoading } = Api.select(this.state.terms || '')(store.getState());
        return(
            <PageWrapper title='Search Your Giphy'>
                <div className='container'>
                    <div aria-hidden="true" className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
                        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
                        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
                    </div>
                        <SearchInput onSearchChange={this.onSearchHandle.bind(this)}/>
                        <GridList data={data?.data || []} isLoading={isLoading}/>
                </div>
                 
            </PageWrapper>
           
        )
    }
}

export default connector(Search);