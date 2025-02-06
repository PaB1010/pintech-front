'use server'

import { redirect } from 'next/navigation'
import { format } from 'date-fns'

/**
 * 회원 가입 처리
 *
 * @param params : QueryString 값
 * @param formData
 */
export const processJoin = async (params, formData: FormData) => {
  // 검증 실패시의 메세지 등

  // console.log('params', params)
  //const redirectUrl = params?.get('redirectUrl') ?? '/member/login'

  const redirectUrl = '/member/login'

  const form = {},
    errors = {}

  let hassErrors = false

  for (let [key, value] of formData.entries()) {
    if (key.includes('$ACTION')) continue

    if (key === 'birthDt' && value && value.trim()) {
      value = format(value, 'yyyy-MM-dd')
    }

    if (['false', 'true'].includes(value)) {
      value = value === 'true'
    }

    form[key] = value
  }

  /* 필수 항목 검증 S */
  const requiredFields = {
    email: '이메일을 입력하세요.',
    name: '이름을 입력하세요.',
    password: '비밀번호를 입력하세요',
    confirmPassword: '비밀번호를 확인하세요',
    // zipCode는 없을 경우 address로 대체하도록 따로 처리 예정
    phoneNumber: '휴대폰 번호를 입력하세요.',
    gender: '성별을 선택하세요.',
    birthDt: '생년월일을 선택하세요.',
    requiredTerms1: '이용 약관에 동의 하셔야 합니다.',
    requiredTerms2: '개인 정보 처리 방침에 동의 하셔야 합니다.',
    requiredTerms3: '개인 정보 수집 이용에 동의 하셔야 합니다.',
  }

  // 회원 가입 완료후 이동
  redirect(redirectUrl)
}

/**
 * 로그인 처리
 *
 * @param params
 * @param formData
 */
export const prcessLogin = async (params, formData: FormData) => {}
