import { Position } from './Position';
import { ObjectUtils } from '../Utils/ObjectUtils';
import { ElementView } from './ElementView';

export class BodyPart extends ElementView {
    rear: BodyPart;

    addRear() {
        if (this.rear) {
            this.rear.addRear();
        } else {
            this.rear = new BodyPart(ObjectUtils.clone(this.position), this.size);
        }
    }
    moveTo(position: Position) {
        this.rear?.moveTo(this.position);
        super.moveTo(position);
    }
    draw(context: CanvasRenderingContext2D) {
        context.fillStyle = '#0F0FFF';
        this.toView(context);
        this.rear?.draw(context);
    }
    touchHead(headPosition:Position): boolean {
        return this.touch(headPosition) || this.rear?.touchHead(headPosition);
    }

}
