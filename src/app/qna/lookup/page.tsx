'use client'

import TopTemplate from "@/components/atmos/TopTemplate";
import "../qna.scss";
import Editor from "@/components/atmos/Editor/editor";
import { Button } from "@/components/atmos/Button";


export default function QnALookup() {

    return (
        <div className='top__container'>
            <TopTemplate title='QnA' red={false} />
            <div>
                <Editor
                // nChange={(content) => setValue(content)} defaultValue="Hi"
                />
            </div>
            <div className='btn__section'>
                <Button sx={{ width: 253, height: 50 }} color='secondary'>취소</Button>
                <Button sx={{ width: 253, height: 50 }} color='info'>수정/등록</Button>
            </div>
        </div>
    )
}