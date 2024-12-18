
import styles from './App.module.css'
import SearchBar from "@components/SearchBar/SearchBar";
import ImageGallery from "@components/ImageGallery/ImageGallery";
import {useEffect, useState} from "react";
import {useImageSearch} from "@api/apiRequests.js";

import Loader from "@components/Loader/Loader.jsx";
import LoadMoreBtn from "@components/LoadMoreBtn/LoadMoreBtn.jsx";

import Modal from 'react-modal';
import {useStore} from "@/Store/useStore.jsx";

import { IoCloseOutline } from "react-icons/io5";

function App() {
    const {image} = useStore();
    Modal.setAppElement('#root');
    const [query, setQuery] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const {
        data:images,
        isLoading,
        isError,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        refetch,
    } = useImageSearch(query)

    useEffect(() => {
        if(query.length){
            refetch()
        }

    },[query])

    const openModal = (e) => {
        if(e.tagName === "IMG") setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }


    return (
    <>
        <SearchBar  query={setQuery} />
        {!query && <p className={styles.text}>Type some words...</p>}
        {isLoading && <Loader className={styles.galleryLoader} />}
        {!images?.pages[0].total_images &&
            !!query.length && !hasNextPage &&
            !isLoading &&
            <p className={styles.text}>no matches for your query</p>
        }
        {isError && <p>{error}</p>}
        { images &&
                <>
                    <ImageGallery images={images} openModal={openModal} />
                    {hasNextPage &&
                        <LoadMoreBtn
                            onClick={fetchNextPage}
                            isFetchingNextPage={isFetchingNextPage}
                            text='Load more'
                        />}
                </>
        }
        <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex:2,
                },
                content: {
                    width: '80vw',
                    height: '80vh',
                    margin: 'auto',
                    border:'none',
                    position:'relative',
                    backgroundColor: 'rgba(0,0,0,0.8)'
                },
            }}
        >
            <img className={styles.fullImage} src={image}    alt={'full image'} />
            <button className={styles.closeButton} onClick={closeModal}><IoCloseOutline /></button>
        </Modal>


    </>
  )
}

export default App
