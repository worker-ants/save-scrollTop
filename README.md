# save-scrollTop
효율적으로 최종 scrollTop 상태를 저장하고, 페이지를 다시 열었을때 복원할 수 있는 방안을 테스트합니다.

## 이슈
scroll 이벤트에서 저장하게 될경우 많은 이벤트가 트리거되어 불필요한 리소스 낭비 및 속도 저하를 유발하게 됩니다.

## 해결 방안
페이지 닫기 및 이동시 스크롤 위치를 저장 처리하며, 본 코드는 실제 동작을 검증하기 위하여 작성되었습니다.

* 저장 시점: window.onbeforeunload
* 복원 시점: window.onload
* 저장소: localStorage