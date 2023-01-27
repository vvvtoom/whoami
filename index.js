let form_count = 1;
const hobby_array = ['읽고_쓰기', '보고_듣기', '운동', '창작', '꾸미기', '수집', '즐기기', '먹기', '공부_자기계발', '예술', '키우기', '휴식_힐링'];

const select_changed = (select_num) => {
    const changed_select = document.querySelector('.like-select-' + select_num);
    const selected_option = changed_select.value;
    const etc_input = document.querySelector('.like-etc-' + select_num);

    const sub_selects = document.querySelectorAll('.sub-select-' + select_num);
    
    sub_selects.forEach(element => {
        if(!element.classList.contains('hide')){
            element.classList.add('hide');
        }
    });

    if(selected_option === "기타"){
        if(etc_input.classList.contains('hide')){
            etc_input.classList.remove('hide');
        }
    } else if(selected_option === "선택"){
        if(!etc_input.classList.contains('hide')){
            etc_input.classList.add('hide');
        }
        const placeholder = document.querySelector('.like-select-placeholder-' + select_num);
        if(placeholder.classList.contains('hide')){
            placeholder.classList.remove('hide');
        }
    } else{
        if(!etc_input.classList.contains('hide')){
            etc_input.classList.add('hide');
        }
        const selected_element = document.querySelector('.' + selected_option + '-' + select_num);
        if(selected_element.classList.contains('hide')){
            selected_element.classList.remove('hide');
        }
    }
}

const add_hobby_form = () => {
    const old_count_string = String(form_count-1);

    let hobby_form = document.querySelector('.hobby-form-' + old_count_string);
    let p_form = hobby_form.cloneNode(true);

    p_form.classList.remove('hobby-form-' + old_count_string);
    p_form.classList.add('hobby-form-' + form_count);

    let form_btn = document.querySelector('.add-hobby-form');
    document.querySelector('.hobby-form-container').insertBefore(p_form, form_btn);

    let like_select = document.querySelectorAll('.like-select-' + old_count_string)[1];
    like_select.classList.remove('like-select-' + old_count_string);
    like_select.classList.add('like-select-' + form_count);

    like_select.setAttribute('onchange', 'select_changed(' + form_count + ')');

    let like_select_placeholder = document.querySelectorAll('.like-select-placeholder-' + old_count_string)[1];
    like_select_placeholder.classList.remove('like-select-placeholder-' + old_count_string);
    like_select_placeholder.classList.add('like-select-placeholder-' + form_count);
    like_select_placeholder.classList.remove('sub-select-' + old_count_string);
    like_select_placeholder.classList.add('sub-select-' + form_count);

    if(like_select_placeholder.classList.contains('hide')){
        like_select_placeholder.classList.remove('hide');
    }

    hobby_array.forEach((hobby_name) => {
        const new_element = document.querySelectorAll('.' + hobby_name + '-' + old_count_string)[1];
        new_element.classList.remove(hobby_name + '-' + old_count_string);
        new_element.classList.add(hobby_name + '-' + form_count);
        new_element.classList.remove('sub-select-' + old_count_string);
        new_element.classList.add('sub-select-' + form_count);
        if(!new_element.classList.contains('hide')){
            new_element.classList.add('hide');
        }
    });

    let etc = document.querySelectorAll('.like-etc-' + old_count_string)[1];
    etc.classList.remove('like-etc-' + old_count_string);
    etc.classList.add('like-etc-' + form_count);

    form_count++;
}

const add_logos_form = () => {
    const logos_form = document.querySelector('.logos-form');
    const p_form = logos_form.cloneNode(true);

    let form_btn = document.querySelector('.add-logos-form');
    document.querySelector('.logos-form-container').insertBefore(p_form, form_btn);

    const logos_texts = document.querySelectorAll('.logos-text');
    logos_texts[logos_texts.length-1].value = '';
}

const vision_text_conv = (b_edit) => {
    const vision_text_form = document.querySelector('.vision-form');
    const vision_title_form = document.querySelector('.vision-title');
    vision_text_form.classList.toggle('hide');
    vision_text_form.classList.toggle('flex');
    vision_title_form.classList.toggle('hide');
    vision_title_form.classList.toggle('flex');
    
    if(!b_edit){
        const vision_verb_text = document.querySelector('.vision-verb-text');
        const vision_adj_text = document.querySelector('.vision-adj-text');

        
        const vision_verb_title = document.querySelector('.vision-verb-title');
        const vision_adj_title = document.querySelector('.vision-adj-title');

        vision_verb_title.textContent = vision_verb_text.value;
        vision_adj_title.textContent = vision_adj_text.value;
    }
}