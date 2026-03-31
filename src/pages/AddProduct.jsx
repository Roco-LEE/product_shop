import { useState } from "react"
import { useNavigate } from "react-router-dom"

const AddProduct = () => {

    // 통합 객체
    const [formData, setFormData] = useState({
        name: '',
        price: 0,
        description: ''
    })

    // 페이지 이동을 위한 훅
    const navigate = useNavigate();

    // 입력값 변경
    const handleChange = (e) => {
        console.log(e);
        
        const { name, value } = e.target

        setFormData({
            ...formData,
            [name]: value // 변경된 값만 업데이트
        })
    }

    // 폼 제출
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('상품추가 : ', formData);

        // 입력값 검증
        if(!formData.name.trim() || !formData.price.trim() || !formData.description.trim()) {
            alert('값을 입력하시요');
            return;
        }

        alert('상품이 등록되었습니다.');

        navigate('/products');
    }

    const handleCancel = (e) => {
        e.preventDefault(); // 폼 제출 방지
        const initialFormState = { name: "", price: "", description: "" };
        setFormData(initialFormState); // 상태를 초기값으로 업데이트
    }

    return (
        <section className="add-product">
            <h2>상품 등록</h2>
            <form onSubmit={handleSubmit} className="add-form">
                <div>
                    <label htmlFor="name">상품명:</label>
                    <input 
                        type="text"
                        placeholder="상품명을 입력하세요"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                     />
                </div>
                <div>
                    <label htmlFor="price">가격:</label>
                    <input 
                        type="number"
                        placeholder="가격을 입력하세요"
                        min={1}
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                     />
                </div>
                <div>
                    <label htmlFor="description">설명:</label>
                    <textarea 
                        placeholder="설명을 입력하세요"
                        rows={5}
                        cols={30}
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                     />
                </div>
                <div>
                    <button type="submit">등록</button>
                    <button type="reset" onClick={handleCancel}>취소</button>
                </div>
            </form>
        </section>
    )
}

export default AddProduct