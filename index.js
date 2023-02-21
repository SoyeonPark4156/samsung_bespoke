$(document).ready(function(){

    //item_list 일괄로 10개 넣기
    for(let i = 0; i < 10; i++){

        let buying_box  = `<div class="buying_box">
        <div class="contents_box">
            <div class="top_box">
                <div class="img_box">
                    <img src="./img/b2d72d00-1297-401a-9caa-eb20b949c356.png" alt="RQ58A9471AP01M">
                </div>
                <div class="color_op_wrap">
                    <input type="radio" name="color_op" id="il_cw-op1">
                    <label for="il_cw-op1" class="on_op">
                        <span>코타 화이트</span>
                        <i class="cota-white"></i>
                    </label>
                </div>
                <div class="product_name_wrap">
                    <p class="product_name">BESPOKE 김치플러스<br>4도어 프리스탠딩 586 L</p>
                    <p class="sku">RQ58A9471AP01M</p>
                </div>
            </div>
            <div class="bot_box">
                <div class="used_benefit_wrap">
                    <div class="used_tit">중고 추가보상</div>
                    <div class="yes_no_wrap">
                        <a href="#" class="yes_box">YES</a>
                        <a href="#" class="no_box">NO</a>
                    </div>
                </div>
                <div class="price_wrap">
                    <dl class="base">
                        <dt>기준가</dt>
                        <dd><span>4,220,000</span>원</dd>
                    </dl>
                    <dl class="benefit">
                        <dt>혜택가</dt>
                        <dd><span>3,199,000</span>원</dd>
                    </dl>
                </div>
                <div class="point_wrap">
                    <div class="point_box">
                        <div class="point_plus">+</div>
                        <h3>총 혜택 <span>50,000원</span> 상당</h3>
                        <dl>
                            <dt>상품평 작성 시 해피머니 상품권</dt>
                            <dd>50,000 원</dd>
                        </dl>
                    </div>
                </div>
                <div class="buying_btn_wrap">
                    <a href="#" class="btn_gift">선물하기</a>
                    <a href="#" class="btn_buying">바로 구매하기</a>
                </div>
                <div class="more_info_wrap">
                    <a href="#">자세히 보기</a>
                </div>
            </div>
        </div>
    </div>`

    $('.item_list_wrap').append(buying_box);
    }


    //아코디언 박스 토글
    $(document).on("click",".arrcodion_btn",function(){
        $(this).parent().next('.arccodion_area').toggleClass('arccodion_show')
    }) 
    
})