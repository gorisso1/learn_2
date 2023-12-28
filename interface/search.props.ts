import {Word} from "@/api/data/category.data";
import React, {Dispatch, SetStateAction} from "react";
import {ForumProps} from "interface/forum.props";

export interface SearchModalProps {
    word: Word[];
    setModal: Dispatch<SetStateAction<boolean>>;

}

export interface SearchState {
    modal: boolean;
    setModal: () => void;
}